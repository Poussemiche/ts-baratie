#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';

import Reception from './Reception'

// TODO: Implement CLI.
export async function main(argv: string[]): Promise<void> {
  console.log('Baratie still in construction...\n', argv)
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
