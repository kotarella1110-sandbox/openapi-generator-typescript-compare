docker run --rm -v "${PWD}:/local" \
  openapitools/openapi-generator-cli generate \
  -i /local/openapi.yaml \
  -g typescript-angular \
  -o /local/dist/typescript-angular

docker run --rm -v "${PWD}:/local" \
  openapitools/openapi-generator-cli generate \
  -i /local/openapi.yaml \
  -g typescript-axios \
  -o /local/dist/typescript-axios

docker run --rm -v "${PWD}:/local" \
  openapitools/openapi-generator-cli generate \
  -i /local/openapi.yaml \
  -g typescript-fetch \
  -o /local/dist/typescript-fetch

docker run --rm -v "${PWD}:/local" \
  openapitools/openapi-generator-cli generate \
  -i /local/openapi.yaml \
  -g typescript-redux-query \
  -o /local/dist/typescript-redux-query
