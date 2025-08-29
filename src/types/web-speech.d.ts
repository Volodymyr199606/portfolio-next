// src/types/web-speech.d.ts
export {} // keep this a module so `declare global` works

declare global {
    // --- minimal result types ---
    type SpeechRecognitionAlternative = { transcript: string; confidence: number }

    interface SpeechRecognitionResult {
        readonly isFinal: boolean
        readonly length: number
        item(index: number): SpeechRecognitionAlternative
        [index: number]: SpeechRecognitionAlternative
    }

    interface SpeechRecognitionResultList {
        readonly length: number
        item(index: number): SpeechRecognitionResult
        [index: number]: SpeechRecognitionResult
    }

    interface SpeechRecognitionEvent extends Event {
        readonly results: SpeechRecognitionResultList
    }

    interface SpeechRecognition extends EventTarget {
        lang: string
        continuous: boolean
        interimResults: boolean
        start(): void
        stop(): void
        onresult: (event: SpeechRecognitionEvent) => void
        onerror: ((event: Event) => void) | null
        onend?: (() => void) | null
        onstart?: (() => void) | null
    }

    interface Window {
        webkitSpeechRecognition?: new () => SpeechRecognition
        SpeechRecognition?: new () => SpeechRecognition
    }
}
