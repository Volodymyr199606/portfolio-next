"use client"

import { useEffect, useRef, useState } from "react"
import { Mic, StopCircle, Volume2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VoiceAgent() {
    const [supported, setSupported] = useState(true)
    const [listening, setListening] = useState(false)
    const [transcript, setTranscript] = useState("")
    const recognitionRef = useRef<SpeechRecognition | null>(null)

    useEffect(() => {
        if (typeof window === "undefined") return
        const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition
        if (!Ctor) {
            setSupported(false)
            return
        }

        const recog = new Ctor()
        recog.lang = "en-US"
        recog.continuous = true
        recog.interimResults = true

        recog.onresult = (e) => {
            const text = Array.from(e.results)
                .map((r) => r[0].transcript)
                .join("")
            setTranscript(text)
        }
        recog.onerror = () => setListening(false)
        recog.onend = () => setListening(false)

        recognitionRef.current = recog
    }, [])

    const start = () => {
        recognitionRef.current?.start()
        setListening(true)
    }

    const stop = () => {
        recognitionRef.current?.stop()
        setListening(false)
    }

    const speak = () => {
        const utter = new SpeechSynthesisUtterance(
            transcript || "Hello! I’m your portfolio voice agent."
        )
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utter)
    }

    if (!supported) {
        return (
            <div className="p-4 border rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Your browser doesn’t support the Web Speech API. Try Chrome/Edge on desktop.</span>
            </div>
        )
    }

    return (
        <div className="p-5 border rounded-2xl shadow-sm bg-white/60 dark:bg-slate-900/40 backdrop-blur">
            <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold">Voice Agent</h3>
                <div className="flex gap-2">
                    {!listening ? (
                        <Button onClick={start} className="gap-2"><Mic className="h-4 w-4" /> Start</Button>
                    ) : (
                        <Button onClick={stop} variant="destructive" className="gap-2">
                            <StopCircle className="h-4 w-4" /> Stop
                        </Button>
                    )}
                    <Button onClick={speak} variant="secondary" className="gap-2">
                        <Volume2 className="h-4 w-4" /> Speak
                    </Button>
                </div>
            </div>

            <div className="text-sm text-muted-foreground">
                <p className="mb-1">Transcript:</p>
                <div className="min-h-12 p-3 rounded-md border bg-background">
                    {transcript || "…"}
                </div>
            </div>
        </div>
    )
}
