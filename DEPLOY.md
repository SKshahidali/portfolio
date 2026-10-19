# Deploying the Portfolio

The site is static, so any static host works. All options below are free.

## Option 1: GitHub Pages (recommended)

1. Create a new public repository, for example `portfolio`.
2. Upload the contents of this folder so `index.html` sits at the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

Tip: name the repo `YOUR-USERNAME.github.io` to get the shorter URL `https://YOUR-USERNAME.github.io/`.

## Option 2: Netlify (drag and drop)

1. Sign in at netlify.com.
2. Open **Sites** and drag the whole `shahid-portfolio` folder onto the deploy area.
3. Netlify gives you a live URL. Rename it under **Site configuration > Change site name**.

## Option 3: Vercel

1. Push the folder to GitHub.
2. In Vercel choose **Add New > Project**, import the repo.
3. Leave the framework as **Other**, no build command, and click **Deploy**.

## After deploying

1. Add your live URL and a preview image to the `og:` tags in `index.html` so LinkedIn shows a rich card.
2. Test the link in the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh its cache.
3. Add the URL to your LinkedIn **Featured** section and **Contact info > Website**.

## Custom domain (optional)

Buy a domain, then follow your host's **Custom domain** setting (GitHub Pages, Netlify and Vercel all include free HTTPS).

## Updating

Edit the files and push or re-upload. Changes go live in about a minute.
