import { InitialSettings } from "../DataChannel/InitialSettings";
import { LatencyTestResults } from "../DataChannel/LatencyTestResults"
import { OverlayController } from "../Overlay/OverlayController";
import { AggregatedStats } from "../PeerConnectionController/AggregatedStats";
import { IWebRtcPlayerController } from "../WebRtcPlayer/IWebRtcPlayerController";
import { MessageInstanceState, MessageAuthResponse } from "../WebSockets/MessageReceive";

/**
 * Delegate is an interface connecting methods from within the libspsfrontend to the user's functions for methods in their frontend implementation
*/
export interface IDelegate {
	
	overlayController: OverlayController;
	
	/**
	 * acts as an override for instantiating the WebRTCPlayerController interface to provide WebRTCPlayerController functionality  
	 * @param iWebRtcPlayerController 
	 */
	setIWebRtcPlayerController(iWebRtcPlayerController: IWebRtcPlayerController) : void;
	
	/**
	 * Set up the WebRtcPlayerController to run automaticity on startup for headless testing and ease of use
	 * @param iWebRtcPlayerController - a webrtc controller type
	 */
	setIWebRtcPlayerControllerAutoplay(iWebRtcPlayerController: IWebRtcPlayerController) : void;

	/**
	 * Set up methods and functions to run when the video is initialised 
	 */
	onVideoInitialised() : void;

	/**
 * Event fired when the video is disconnected
 */
	onDisconnect() : void;

	/**
	 * Set up functionality to happen when receiving latency test results 
	 * @param latency - latency test results object
	 */
	onLatencyTestResult(latency: LatencyTestResults) : void;

	/**
	 * Set up functionality to happen when receiving video statistics 
	 * @param videoStats - video statistics as a aggregate stats object 
	 */
	onVideoStats(videoStats: AggregatedStats) : void;

	/**
	 * Set up functionality to happen when calculating the average video encoder qp 
	 * @param QP - the quality number of the stream
	 */
	onVideoEncoderAvgQP(QP: number) : void;

	/**
	 * Set up functionality to happen when receiving and handling initial settings for the UE app 
	 * @param settings - initial UE app settings  
	 */
	onInitialSettings(settings: InitialSettings) : void;

	/**
	 * Set up functionality to happen when setting quality control ownership of a stream 
	 * @param hasQualityOwnership - does this user have quality ownership of the stream true / false
	 */
	onQualityControlOwnership(hasQualityOwnership: boolean) : void;

	/**
	 * Set up functionality to happen when an instance state change occurs
	 * @param instanceState - the message instance state
	 */
	onInstanceStateChange(instanceState: MessageInstanceState) : void;

	/**
	 * Set up functionality to happen when receiving an auth response
	 * @param authResponse - the auth response message type
	 */
	onAuthenticationResponse(authResponse: MessageAuthResponse) : void;

	/**
	 * Set up functionality to happen when receiving a webRTC answer
	 */
	onWebRtcAnswer() : void;
}