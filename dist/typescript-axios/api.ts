/* tslint:disable */
/* eslint-disable */
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


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ExampleNonRef
 */
export interface ExampleNonRef {
    /**
     * 
     * @type {string | number | boolean | Array<number> | Array<boolean> | Array<string> | Array<object> | object}
     * @memberof ExampleNonRef
     */
    oneOf?: string | number | boolean | Array<number> | Array<boolean> | Array<string> | Array<object> | object;
    /**
     * 
     * @type {Array<string | number | boolean | Array<number> | Array<boolean> | Array<string> | Array<object> | object>}
     * @memberof ExampleNonRef
     */
    arrayOneOf?: Array<string | number | boolean | Array<number> | Array<boolean> | Array<string> | Array<object> | object>;
    /**
     * 
     * @type {string}
     * @memberof ExampleNonRef
     */
    nullableEnum?: ExampleNonRefNullableEnumEnum;
    /**
     * 
     * @type {string}
     * @memberof ExampleNonRef
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof ExampleNonRef
     */
    dateTime?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ExampleNonRefNullableEnumEnum {
    _00 = '00',
    _01 = '01',
    _02 = '02'
}

/**
 * 
 * @export
 * @interface ExampleRef
 */
export interface ExampleRef {
    /**
     * 
     * @type {OneOf}
     * @memberof ExampleRef
     */
    oneOf?: OneOf;
    /**
     * 
     * @type {Array<OneOf>}
     * @memberof ExampleRef
     */
    arrayOneOf?: Array<OneOf>;
    /**
     * 
     * @type {NullableEnum}
     * @memberof ExampleRef
     */
    nullableEnum?: NullableEnum | null;
    /**
     * 
     * @type {string}
     * @memberof ExampleRef
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof ExampleRef
     */
    dateTime?: string;
}
/**
 * 
 * @export
 * @interface FooBarObject
 */
export interface FooBarObject {
    /**
     * 
     * @type {string}
     * @memberof FooBarObject
     */
    foo?: string;
    /**
     * 
     * @type {number}
     * @memberof FooBarObject
     */
    bar?: number;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum NullableEnum {
    _00 = '00',
    _01 = '01',
    _02 = '02'
}

/**
 * @type OneOf
 * @export
 */
export type OneOf = Array<FooBarObject> | Array<boolean> | Array<number> | Array<string> | FooBarObject | boolean | number | string;


/**
 * NonRefApi - axios parameter creator
 * @export
 */
export const NonRefApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNonRef: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/example/non_ref`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NonRefApi - functional programming interface
 * @export
 */
export const NonRefApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNonRef(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExampleNonRef>> {
            const localVarAxiosArgs = await NonRefApiAxiosParamCreator(configuration).getNonRef(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NonRefApi - factory interface
 * @export
 */
export const NonRefApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNonRef(options?: any): AxiosPromise<ExampleNonRef> {
            return NonRefApiFp(configuration).getNonRef(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NonRefApi - object-oriented interface
 * @export
 * @class NonRefApi
 * @extends {BaseAPI}
 */
export class NonRefApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NonRefApi
     */
    public getNonRef(options?: any) {
        return NonRefApiFp(this.configuration).getNonRef(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RefApi - axios parameter creator
 * @export
 */
export const RefApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRef: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/example/ref`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RefApi - functional programming interface
 * @export
 */
export const RefApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRef(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExampleRef>> {
            const localVarAxiosArgs = await RefApiAxiosParamCreator(configuration).getRef(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RefApi - factory interface
 * @export
 */
export const RefApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRef(options?: any): AxiosPromise<ExampleRef> {
            return RefApiFp(configuration).getRef(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RefApi - object-oriented interface
 * @export
 * @class RefApi
 * @extends {BaseAPI}
 */
export class RefApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefApi
     */
    public getRef(options?: any) {
        return RefApiFp(this.configuration).getRef(options).then((request) => request(this.axios, this.basePath));
    }
}


