/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GatewayCertificateAuthorityContract,
  GatewayCertificateAuthorityListByServiceOptionalParams,
  GatewayCertificateAuthorityGetEntityTagOptionalParams,
  GatewayCertificateAuthorityGetEntityTagResponse,
  GatewayCertificateAuthorityGetOptionalParams,
  GatewayCertificateAuthorityGetResponse,
  GatewayCertificateAuthorityCreateOrUpdateOptionalParams,
  GatewayCertificateAuthorityCreateOrUpdateResponse,
  GatewayCertificateAuthorityDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GatewayCertificateAuthority. */
export interface GatewayCertificateAuthority {
  /**
   * Lists the collection of Certificate Authorities for the specified Gateway entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayCertificateAuthorityListByServiceOptionalParams
  ): PagedAsyncIterableIterator<GatewayCertificateAuthorityContract>;
  /**
   * Checks if Certificate entity is assigned to Gateway entity as Certificate Authority.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    certificateId: string,
    options?: GatewayCertificateAuthorityGetEntityTagOptionalParams
  ): Promise<GatewayCertificateAuthorityGetEntityTagResponse>;
  /**
   * Get assigned Gateway Certificate Authority details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    certificateId: string,
    options?: GatewayCertificateAuthorityGetOptionalParams
  ): Promise<GatewayCertificateAuthorityGetResponse>;
  /**
   * Assign Certificate entity to Gateway entity as Certificate Authority.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param parameters Gateway certificate authority details.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    certificateId: string,
    parameters: GatewayCertificateAuthorityContract,
    options?: GatewayCertificateAuthorityCreateOrUpdateOptionalParams
  ): Promise<GatewayCertificateAuthorityCreateOrUpdateResponse>;
  /**
   * Remove relationship between Certificate Authority and Gateway entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    certificateId: string,
    ifMatch: string,
    options?: GatewayCertificateAuthorityDeleteOptionalParams
  ): Promise<void>;
}
