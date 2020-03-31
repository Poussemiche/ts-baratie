#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';

// TODO: Implement CLI.
export async function main(argv: string[]): Promise<void> {
  console.log('Hello, world!', argv);
}

//
// Boilerplate
//

function onError(err: unknown) {
  console.log(err);
  process.exit(1);
}

process.on('uncaughtException', onError);
process.on('unhandledRejection', onError);

installSourceMapSupport();
main(process.argv);
