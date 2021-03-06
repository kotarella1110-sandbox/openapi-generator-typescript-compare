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

import { exists, mapValues } from '../runtime';
import {
    NullableEnum,
    NullableEnumFromJSON,
    NullableEnumFromJSONTyped,
    NullableEnumToJSON,
    OneOf,
    OneOfFromJSON,
    OneOfFromJSONTyped,
    OneOfToJSON,
} from './';

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
     * @type {Date}
     * @memberof ExampleRef
     */
    date?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ExampleRef
     */
    dateTime?: Date;
}

export function ExampleRefFromJSON(json: any): ExampleRef {
    return ExampleRefFromJSONTyped(json, false);
}

export function ExampleRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExampleRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oneOf': !exists(json, 'oneOf') ? undefined : OneOfFromJSON(json['oneOf']),
        'arrayOneOf': !exists(json, 'arrayOneOf') ? undefined : ((json['arrayOneOf'] as Array<any>).map(OneOfFromJSON)),
        'nullableEnum': !exists(json, 'nullableEnum') ? undefined : NullableEnumFromJSON(json['nullableEnum']),
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'dateTime': !exists(json, 'dateTime') ? undefined : (new Date(json['dateTime'])),
    };
}

export function ExampleRefToJSON(value?: ExampleRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oneOf': OneOfToJSON(value.oneOf),
        'arrayOneOf': value.arrayOneOf === undefined ? undefined : ((value.arrayOneOf as Array<any>).map(OneOfToJSON)),
        'nullableEnum': NullableEnumToJSON(value.nullableEnum),
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'dateTime': value.dateTime === undefined ? undefined : (value.dateTime.toISOString()),
    };
}


