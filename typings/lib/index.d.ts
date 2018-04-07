export { EventData, AmqpMessage, AmqpMessageAnnotations, Dictionary } from "./eventData";
export { ConnectionConfig } from "./connectionConfig";
export { EventHubReceiver, ReceiverRuntimeInfo, OnMessage as ReceiverOnMessage } from "./eventHubReceiver";
export { EventHubSender } from "./eventHubSender";
import * as Errors from "./errors";
export { EventHubClient, ReceiveOptions } from "./eventHubClient";
import EventPosition from "./eventPosition";
export { EventHubPartitionRuntimeInformation, EventHubRuntimeInformation } from "./managementClient";
export { TokenType, TokenProvider, TokenInfo } from "./auth/token";
export { Errors, EventPosition };
export { aadEventHubsAudience } from "./util/constants";
export import EventHubManagementClient = require("azure-arm-eventhub");
import * as EventHubManagementModels from "azure-arm-eventhub/lib/models";
export { EventHubManagementModels };
