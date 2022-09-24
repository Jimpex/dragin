/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { config as dotEnvConfig } from "dotenv";
const env = dotEnvConfig();
Deno.env.set("CLIENT_ID", env.CLIENT_ID);
Deno.env.set("AUTHORIZATION", env.AUTHORIZATION);

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
