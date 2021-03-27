import {APIGatewayEvent} from 'aws-lambda';
import {ADFEntity, filter} from '@atlaskit/adf-utils';

export const hello = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

export const getTemplateAdf = async (event: APIGatewayEvent) => {
  const fieldGroupMacro = filter(
    {type: 'something'},
    (node: ADFEntity) =>
      node.attrs?.extensionKey === 'field-group' &&
      node.attrs?.parameters?.macroMetadata.macroId?.value === 'someId'
  );
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      fieldGroupMacro,
    }, null, 2),
  };
}
