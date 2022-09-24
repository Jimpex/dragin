import { HandlerContext } from "$fresh/server.ts";
import { StreamResponse, StreamsResponse } from "../../types/api/index.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  const stream = await getStream();
  if (stream instanceof Error)
    return new Response("Error when fetching", { status: 500 });
  // console.log(data.data[0]);
  const str = stream.data[0];
  const data: StreamResponse = str
    ? {
        data: {
          name: str.user_login,
          game: str.game_name,
        },
      }
    : {};
  return new Response(JSON.stringify(data));
};

async function getStream() {
  const headers = new Headers({
    "Client-ID": Deno.env.get("CLIENT_ID")!, // "71j65akfcv06v1q8mn6o3xs9o3s86u",
    Authorization: `Bearer ${Deno.env.get("AUTHORIZATION")!}`, //Bearer qdpift6gv8rwnyv55izs8jpxthvgq3",
  });
  const res = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=draginair",
    {
      // method: "POST",
      headers,
    }
  );

  if (res.status !== 200) return new Error("Error when fetching");

  return (await res.json()) as StreamsResponse;
}
