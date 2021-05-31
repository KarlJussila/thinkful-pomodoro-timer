import React, { useState } from "react";

function Controls({ session, isTimerRunning, focusDuration, breakDuration, playPause, stopTimer, incrementFocus, decrementFocus, incrementBreak, decrementBreak, classNames }) {
    const minuteDisplay = (minutes) => {
        let display = minutes.toString();
        while (display.length <= 1) {
            display = "0" + display;
        }
        return display + ":00"
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="input-group input-group-lg mb-2">
                        <span className="input-group-text" data-testid="duration-focus">
                            {/* TODO: Update this text to display the current focus session duration */}
                            Focus Duration: {minuteDisplay(focusDuration)}
                        </span>
                        <div className="input-group-append">
                            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-testid="decrease-focus"
                                disabled={focusDuration <= 5 || session !== null}
                                onClick={decrementFocus}
                                >
                                <span className="oi oi-minus" />
                            </button>
                            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-testid="increase-focus"
                                disabled={focusDuration >= 60 || session !== null}
                                onClick={incrementFocus}
                                >
                                <span className="oi oi-plus" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="float-right">
                        <div className="input-group input-group-lg mb-2">
                            <span className="input-group-text" data-testid="duration-break">
                                {/* TODO: Update this text to display the current break session duration */}
                                Break Duration: {minuteDisplay(breakDuration)}
                            </span>
                            <div className="input-group-append">
                                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-testid="decrease-break"
                                    disabled={breakDuration <= 1 || session !== null}
                                    onClick={decrementBreak}
                                    >
                                    <span className="oi oi-minus" />
                                </button>
                                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-testid="increase-break"
                                    disabled={breakDuration >= 15 || session !== null}
                                    onClick={incrementBreak}
                                    >
                                    <span className="oi oi-plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div
                        className="btn-group btn-group-lg mb-2"
                        role="group"
                        aria-label="Timer controls"
                        >
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-testid="play-pause"
                            title="Start or pause timer"
                            onClick={playPause}
                            >
                            <span
                                className={classNames({
                                    oi: true,
                                    "oi-media-play": !isTimerRunning,
                                    "oi-media-pause": isTimerRunning,
                                })}
                                />
                        </button>
                        {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
                        {/* TODO: Disable the stop button when there is no active session */}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="stop"
                            title="Stop the session"
                            disabled={session === null}
                            onClick={stopTimer}
                            >
                            <span className="oi oi-media-stop" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Controls;
