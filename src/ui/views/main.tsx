"use client";

import React from "react";

import "../styles/layout.css";
import "../styles/view.css";

export function MainView() {
    return (
        <div className="view">
            <div className="onboarding">
                <h1>Welcome to Warpdroid</h1>
                <i>
                    Compiling Scratch and Web to Android, made easy.
                </i>
                <div className="onboardActions">
                    <button
                        id="createProject">
                        
                    </button>
                </div>
            </div>
        </div>
    );
}