import VoiceAgent from "@/components/ui/VoiceAgent";


export default function VoiceDemoPage() {
    return (
        <main className="container max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">Voice Agent Demo</h1>
            <p className="text-muted-foreground">
                Click <b>Start</b>, speak, then <b>Stop</b>. Press <b>Speak</b> to hear it back.
            </p>
            <VoiceAgent />
        </main>
    )
}