import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "ABHA क्या है?",
    prompt: "ABHA क्या है?",
    icon: "circle-question",
  },
  {
    label: "ABHA कैसे बनेगा?",
    prompt: "ABHA कैसे बनेगा?",
    icon: "circle-question",
  },
  {
    label: "ABHA कहाँ काम आएगा?",
    prompt: "ABHA कहाँ काम आएगा?",
    icon: "circle-question",
  },
  {
    label: "FAQs",
    prompt: "FAQs",
    icon: "circle-question",
  },
  {
    label: "सहायता",
    prompt: "सहायता",
    icon: "circle-question",
  },
];

// Custom question buttons for ABHA bot
export const QUESTION_BUTTONS = [
  "ABHA क्या है?",
  "ABHA कैसे बनेगा?",
  "ABHA कहाँ काम आएगा?",
  "FAQs",
  "सहायता",
];

export const PLACEHOLDER_INPUT = "Type your message...";

export const GREETING = "नमस्ते! 👋 मैं ABHA सहायता चैटबॉट हूँ। आप ABHA क्या है, ABHA कैसे बनता है, ABHA कहाँ काम आता है, FAQs या सहायता के बारे में पूछ सकते हैं।";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 140,
      tint: 3,
      shade: -2,
    },
    accent: {
      primary: "#22c55e",
      level: 2,
    },
  },
  radius: "round",
  // Pleasant theme with green accents and grey tones
  // chatkit.studio/playground to explore config options
});
