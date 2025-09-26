# 📸 Add Your Profile Picture

## 🚀 Quick Steps to Add Your Own Image

### Method 1: Local Image File (Recommended)

1. **Prepare your image:**
   - Use a square photo (1:1 aspect ratio)
   - Recommended size: 400x400px or larger
   - Format: JPG, PNG, or JPEG
   - Clear, professional headshot works best

2. **Add the image to your portfolio:**
   ```bash
   # Copy your image to the images folder
   cp /path/to/your/photo.jpg /home/gaurav/PORTFOLIO/images/profile.jpg
   
   # Or use any of these names (the script will find them automatically):
   # profile.jpg, profile.png, profile.jpeg, avatar.jpg, avatar.png
   ```

3. **Commit and push to GitHub:**
   ```bash
   cd /home/gaurav/PORTFOLIO
   git add images/
   git commit -m "✨ Add personal profile picture"
   git push
   ```

4. **Wait 2-3 minutes** for GitHub Pages to update your live site!

### Method 2: Update GitHub Profile Picture
Simply update your GitHub profile picture, and it will automatically show up on your portfolio!

### Method 3: Use External URL
If you have your image hosted elsewhere, you can edit the HTML:

```html
<!-- In index.html, around line 141: -->
<img src="https://your-image-url-here.com/photo.jpg" 
     alt="Gaurav Bhatia - Security Researcher" 
     class="avatar-img">
```

## 🎨 Current Image Behavior

Your portfolio currently:
1. ✅ **First**: Tries to load local images (`profile.jpg`, etc.)
2. ✅ **Then**: Falls back to your GitHub avatar
3. ✅ **Finally**: Shows a custom cyberpunk placeholder if nothing loads

## 🖼️ Image Tips for Best Results

### ✅ Good Image Qualities:
- Professional headshot or portrait
- Clear, well-lit face
- Square aspect ratio
- High resolution (400px+)
- Minimal background distractions

### ❌ Avoid:
- Blurry or pixelated images
- Group photos
- Images with text overlay
- Very small resolution
- Inappropriate content

## 🔄 Testing Your Image

After adding your image:

1. **Visit your portfolio:** https://gauravbhatia1211.github.io/portfolio/
2. **Check the profile circle** in the hero section
3. **Verify it loads properly** on mobile devices
4. **Test the hover effect** (should scale slightly)

## 📱 Mobile Considerations

Your image will automatically:
- Scale properly on mobile devices
- Maintain the circular crop
- Keep the glow and hover effects
- Load efficiently with the fallback system

## 🛠️ Troubleshooting

**Image not showing?**
- Check file name matches: `profile.jpg`, `profile.png`, etc.
- Ensure image is in the `images/` folder
- Wait a few minutes for GitHub Pages to update
- Check browser cache (Ctrl+F5 to refresh)

**Image looks stretched?**
- Use a square (1:1) aspect ratio image
- Crop your photo to be square before uploading

**Want to change the image later?**
- Simply replace the file with the same name
- Or add a new file and update the HTML
- Commit and push the changes

---

**🎉 Once your image is added, your portfolio will have your personal touch and look even more professional!**