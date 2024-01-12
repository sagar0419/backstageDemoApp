import { CatalogClient } from '@backstage/catalog-client';
import { createRouter } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';

// import { createAwsS3CpAction, createEcrAction, createAwsSecretsManagerCreateAction } from '@roadiehq/scaffolder-backend-module-aws';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({
    discoveryApi: env.discovery,
  });

  // const actions = [
  //   createAwsS3CpAction(),
  //   createEcrAction(),
  //   createAwsSecretsManagerCreateAction(),
  //   ...createBuiltinActions({
  //     containerRunner,
  //     integrations,
  //     config,
  //     catalogClient,
  //     reader,
  //   }),
  // ];

  

  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient,
    identity: env.identity,
    permissions: env.permissions,
    // containerRunner,
    // logger,
    // config,
    // database,
    // catalogClient,
    // reader,
    // actions,
  });
}
