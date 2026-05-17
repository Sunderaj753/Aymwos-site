# GitHub Pages Deployment Guide for AymWos Technologies

## Prerequisites
- GitHub account (https://github.com)
- Git installed on your computer
- Your domain: aymwostechnologies.com

## Step-by-Step Deployment

### STEP 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in the repository name: **aymwostechnologies.github.io**
   - Replace `aymwostechnologies` with your GitHub username
   - This naming is REQUIRED for GitHub Pages to work as the main site
3. Choose "Public" (required for free GitHub Pages)
4. **DO NOT** initialize with README or .gitignore (we already have these)
5. Click "Create repository"

### STEP 2: Add Remote and Push Code

After creating the repository, you should see instructions. Follow these commands in your terminal:

```bash
cd C:\Users\sunde\OneDrive\Desktop\pyspark\Aymwos-site

# Add the remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/aymwostechnologies.github.io.git

# If you need to change branch name to main (GitHub's default)
git branch -M main

# Push your code
git push -u origin main
```

Example if your username is "aymwos":
```bash
git remote add origin https://github.com/aymwos/aymwostechnologies.github.io.git
git branch -M main
git push -u origin main
```

### STEP 3: Verify GitHub Pages is Enabled

1. Go to your repository on GitHub
2. Click on "Settings" (gear icon)
3. Scroll down to "Pages" section
4. You should see: "Your site is live at https://aymwostechnologies.github.io"
5. The site may take a few minutes to build and deploy

### STEP 4: Connect Your Custom Domain

1. Go to Repository Settings → Pages
2. Under "Custom domain", enter: **aymwostechnologies.com**
3. Click "Save"
4. A CNAME file will be created (we already have one in the repo)

### STEP 5: Update DNS Settings (Most Important!)

Now you need to point your domain to GitHub Pages. This depends on your domain registrar:

#### For DNS Records Configuration:
Add these DNS records to your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using A Records (Recommended)**
```
Host: @
Type: A
Value: 185.199.108.153

Host: @
Type: A
Value: 185.199.109.153

Host: @
Type: A
Value: 185.199.110.153

Host: @
Type: A
Value: 185.199.111.153
```

**Option B: Using CNAME Record (for www subdomain)**
```
Host: www
Type: CNAME
Value: aymwostechnologies.github.io
```

#### Common Domain Registrars:

**GoDaddy:**
1. Log in to GoDaddy
2. Go to "My Products" → "Domains"
3. Click "Manage" next to your domain
4. Click "DNS" tab
5. Add the A records as shown above

**Namecheap:**
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to your domain
4. Go to "Advanced DNS" tab
5. Add the A records as shown above

**Other Registrars:** Follow their specific DNS management instructions and add the same A records.

### STEP 6: Wait for DNS Propagation

DNS propagation can take 24-48 hours. You can check status at:
- https://dnschecker.org
- Enter your domain and check if it resolves correctly

In the meantime, you can visit:
- https://aymwostechnologies.github.io (will work immediately)

### STEP 7: Enable HTTPS (Free via GitHub)

1. Go to Repository Settings → Pages
2. Check the box: "Enforce HTTPS"
3. Wait a few minutes for the certificate to be generated
4. Your site is now secure with SSL/TLS

## After Deployment

### Making Updates

To update your website:

1. Edit files locally on your computer
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: Your change description"
   git push origin main
   ```
3. Changes will be live within a few seconds!

### Monitoring

- Visit https://github.com/YOUR_USERNAME/aymwostechnologies.github.io/deployments
- See deployment history and status
- Check build logs if deployment fails

## Troubleshooting

### Site not loading after DNS update?
- Wait 24-48 hours for DNS propagation
- Clear your browser cache (Ctrl+Shift+Delete)
- Try a different browser or private window
- Check DNS records at https://dnschecker.org

### GitHub Pages not showing custom domain?
1. Go to Settings → Pages
2. Remove the custom domain
3. Wait 1 minute
4. Re-add the custom domain
5. Verify CNAME file exists in repository

### Build failure?
- Check GitHub Actions tab for error logs
- Ensure index.html is in root directory
- Verify all file paths are correct
- Check for special characters in filenames

## Important Security Notes

⚠️ **Never commit:**
- API keys or secrets
- Passwords or authentication tokens
- Private configuration files

✅ **Always use HTTPS** - This is now required by GitHub Pages

## Performance Tips

### Optimize Images
- Use modern formats (WebP, AVIF)
- Compress images before uploading
- Use services like TinyPNG.com

### Cache Management
- GitHub Pages handles caching automatically
- For instant updates, use `?v=1` parameter: `<link href="css/styles.css?v=1">`

### Monitor Performance
- Use Lighthouse: https://pagespeed.web.dev
- Test at: https://gtmetrix.com
- Monitor uptime: https://uptimerobot.com

## Analytics & SEO

Add Google Analytics:
1. Create account at https://analytics.google.com
2. Add this to your `<head>` in index.html:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_GA_ID');
   </script>
   ```

Submit to Google Search Console:
1. Go to https://search.google.com/search-console
2. Add your domain
3. Verify ownership
4. Submit sitemap: https://aymwostechnologies.com/sitemap.xml

## Support & Resources

- GitHub Pages Docs: https://pages.github.com
- GitHub Help: https://docs.github.com
- DNS Troubleshooting: https://support.github.com

---

## Quick Reference Commands

```powershell
# Initial setup (done)
git init
git add .
git commit -m "Initial commit"

# Add remote (do this once)
git remote add origin https://github.com/USERNAME/aymwostechnologies.github.io.git

# Push changes
git push -u origin main

# Subsequent pushes after changes
git add .
git commit -m "Description of changes"
git push
```

---

**Your website is ready to go! Follow the steps above and you'll be live soon.** 🚀

For technical support, contact: info@aymwostechnologies.com

