# Deploy to Vercel - Get Your Live Link! 🚀

Your code is now on GitHub! Follow these steps to get a live link:

## Step 1: Go to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"** (use your GitHub account)

## Step 2: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"ABHA_BOT"** and click **"Import"**

## Step 3: Configure Environment Variables

Vercel will ask you to add environment variables. Click **"Add"** for each:

### Required Variables:

1. **`OPENAI_API_KEY`**
   - Value: Your OpenAI API key (starts with `sk-...`)
   - Get it from: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

2. **`NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`**
   - Value: Your workflow ID (starts with `wf_...`)
   - Get it from: [Agent Builder](https://platform.openai.com/agent-builder) after clicking "Publish"

### Optional Variable:

3. **`CHATKIT_API_BASE`** (Optional)
   - Value: Leave empty or use `https://api.openai.com`
   - You can skip this one

## Step 4: Deploy!

1. Click **"Deploy"** button
2. Wait 1-2 minutes for the build to complete
3. You'll get a live link like: `https://abha-bot.vercel.app` 🎉

## Step 5: Domain Allowlist (IMPORTANT!)

Before your ChatKit works, you need to:

1. Go to [OpenAI Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
2. Click **"Add Domain"**
3. Enter your Vercel domain (e.g., `abha-bot.vercel.app`)
4. Click **"Add"**

## Step 6: Share Your Link!

Once deployed, you'll have a link like:
```
https://abha-bot.vercel.app
```

Share this with anyone! 🎊

---

## Troubleshooting

- **Build fails?** Make sure all environment variables are set correctly
- **ChatKit not working?** Check that you added your domain to OpenAI's allowlist
- **Need to update?** Just push to GitHub - Vercel auto-deploys on every push!

---

**That's it! You'll have a live link in minutes!** 🚀
