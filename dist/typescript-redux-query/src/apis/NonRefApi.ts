// tslint:disable
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    ExampleNonRef,
    ExampleNonRefFromJSON,
    ExampleNonRefToJSON,
} from '../models';


/**
 */
function getNonRefRaw<T>( requestConfig: runtime.TypedQueryConfig<T, ExampleNonRef> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/example/non_ref`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ExampleNonRefFromJSON(body), text);
    }

    return config;
}

/**
*/
export function getNonRef<T>( requestConfig?: runtime.TypedQueryConfig<T, ExampleNonRef>): QueryConfig<T> {
    return getNonRefRaw( requestConfig);
}

