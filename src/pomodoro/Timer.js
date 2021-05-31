import React, { useState } from "react";

function Timer({ session, isTimerRunning, focusDuration, breakDuration }) {
        const progress = () => {
                return session === null ? 0 : (1 - (session.timeRemaining / (sessionDuration() * 60))) * 100;
        }

        const timeRemaining = () => {
            if (session !== null) {
                let minuteString = `${Math.floor(session.timeRemaining / 60)}`;
                while (minuteString.length <= 1) {
                    minuteString = "0" + minuteString;
                }

                let secondString = `${session.timeRemaining % 60}`;
                while (secondString.length <= 1) {
                    secondString = "0" + secondString
                }
                return `${minuteString}:${secondString}`
            }
            return null;
        }

        const minuteDisplay = (minutes) => {
            let display = minutes.toString();
            while (display.length <= 1) {
                display = "0" + display;
            }
            return display + ":00"
        }

        const sessionDuration = () => {
            if (session !== null) {
                return session.label === "Focusing" ? focusDuration : breakDuration;
            }
        }

        return session !== null ? (
                <>
                    {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
                    <div className="row mb-2">
                        <div className="col">
                            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                            <h2 data-testid="session-title">
                                {session === null ? "" : session.label} for {minuteDisplay(sessionDuration())} minutes
                            </h2>
                            {/* TODO: Update message below correctly format the time remaining in the current session */}
                            <p className="lead" data-testid="session-sub-title">
                                {timeRemaining()} remaining
                            </p>
                        </div>
                    </div>
                    {isTimerRunning ? (
                        <div></div>
                    ) : (
                        <div className="row mb-2">
                            <div className="col">
                                <h2>
                                    PAUSED
                                </h2>
                            </div>
                        </div>
                    )}
                    <div className="row mb-2">
                        <div className="col">
                            <div className="progress" style={{ height: "20px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow={progress()}
                                    style={{ width: `${progress()}%` }} // TODO: Increase width % as elapsed time increases
                                />
                            </div>
                        </div>
                    </div>
                </>
        ) : <></>;
}

export default Timer;
