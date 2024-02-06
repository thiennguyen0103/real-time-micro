import { v } from "convex/values";

import { query } from "./_generated/server";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject;

    if (args.favorites) {
      const favoredBoards = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_org", (q) =>
          q.eq("userId", userId).eq("orgId", args.orgId),
        )
        .order("desc")
        .collect();

      const ids = favoredBoards.map((b) => b.boardId);

      const boards = await getAllOrThrow(ctx.db, ids);

      return boards.map((board) => ({
        ...board,
        isFavorite: true,
      }));
    }

    const title = args.search as string;
    let boards = [];

    if (title) {
      boards = await ctx.db
        .query("boards")
        .withSearchIndex("search_title", (q) =>
          q.search("title", title).eq("orgId", args.orgId),
        )
        .collect();
    } else {
      boards = await ctx.db
        .query("boards")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
    }

    const boardWithFavoriteRelation = boards.map(async (board) => {
      const favorite = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) =>
          q.eq("userId", userId).eq("boardId", board._id),
        )
        .unique();
      return {
        ...board,
        isFavorite: !!favorite,
      };
    });

    const boardsWithFavoriteBoolean = Promise.all(boardWithFavoriteRelation);

    return boardsWithFavoriteBoolean;
  },
});
