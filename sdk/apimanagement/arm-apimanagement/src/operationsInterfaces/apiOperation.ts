/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationContract,
  ApiOperationListByApiOptionalParams,
  ApiOperationGetEntityTagOptionalParams,
  ApiOperationGetEntityTagResponse,
  ApiOperationGetOptionalParams,
  ApiOperationGetResponse,
  ApiOperationCreateOrUpdateOptionalParams,
  ApiOperationCreateOrUpdateResponse,
  OperationUpdateContract,
  ApiOperationUpdateOptionalParams,
  ApiOperationUpdateResponse,
  ApiOperationDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiOperation. */
export interface ApiOperation {
  /**
   * Lists a collection of the operations for the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiOperationListByApiOptionalParams
  ): PagedAsyncIterableIterator<OperationContract>;
  /**
   * Gets the entity state (Etag) version of the API operation specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    options?: ApiOperationGetEntityTagOptionalParams
  ): Promise<ApiOperationGetEntityTagResponse>;
  /**
   * Gets the details of the API Operation specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    options?: ApiOperationGetOptionalParams
  ): Promise<ApiOperationGetResponse>;
  /**
   * Creates a new operation in the API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    parameters: OperationContract,
    options?: ApiOperationCreateOrUpdateOptionalParams
  ): Promise<ApiOperationCreateOrUpdateResponse>;
  /**
   * Updates the details of the operation in the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters API Operation Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    ifMatch: string,
    parameters: OperationUpdateContract,
    options?: ApiOperationUpdateOptionalParams
  ): Promise<ApiOperationUpdateResponse>;
  /**
   * Deletes the specified operation in the API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    ifMatch: string,
    options?: ApiOperationDeleteOptionalParams
  ): Promise<void>;
}
