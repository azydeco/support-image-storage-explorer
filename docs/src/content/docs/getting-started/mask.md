---
title: Mask
---


The Mask feature is **Image Storage Explorer's** superpower, allowing you to customise what is copied and pasted into any document that you edit in VScode.

Whatever language or framework you working with, it can be customised to fit your needs.

## Initial Value

When you create a new provider you mask will be set to it's initial value

```html
<img src="%PUBLIC_ENDPOINT%/%ASSET_NAME%" alt="" />
```

When pasted into an **HTML** document you will get

```html
<img src="https://example.com/myimage.png" alt="" />
```

## Available variables

```txt
%ASSET_NAME%
%ASSET_NAME_WITHOUT_EXT%
%ASSET_EXT%
%BUCKET_NAME%
%PUBLIC_ENDPOINT%
```

## Relative links

If you want to use relative links you can omit the ```%PUBLIC_ENDPOINT%```  and you have

```html
<img src="/%ASSET_NAME%" alt="" />
<!-- will paste -->
<img src="/myimage.png" alt="" />
```

## Responsive Images

If you have images in you bucket that have multiple sizes you can use the following to have responsive images.

This assumes that you have the default image of

- ```/myImage.jpg```

and resized images of

- ```/myImage-480w.jpg``` and  ```/myImage-800w.jpg``` in your bucket

> Mask

```html
<img
  srcset="%ASSET_NAME_WITHOUT_EXT%-480w.jpg 480w, %ASSET_NAME_WITHOUT_EXT%-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="%ASSET_NAME_WITHOUT_EXT%-800w.jpg"
  alt="my responsive image" />

```

> Result

```html

<img
  srcset="/myImage-480w.jpg 480w, /myImage-800w.jpg 800w"
  sizes="(max-width: 600px) 480px, 
        800px"
  src="/myImage-800w.jpg"
  alt="my responsive image" />
```

## Frameworks

And it should work just as easily with your favourite framework of choice.

### Next.js

> Mask

```tsx

 <Image
      src="/%ASSET_NAME%"
      width={500}
      height={500}
      alt=""
    />
```

> Result

```tsx
   <Image
      src="/profile.png"
      width={500}
      height={500}
      alt=""
    />

```

## Cloudflare Images

Cloudflare Images allows you to transform your images without needing any other service.

You just upload your images to your bucket of choice, then add the parameters  needed to transform your url and best of all, it's **free for 5000** unique transformations per month.

If you have already a bucket setup, you just need to enable this feature for it in Cloudflare's  dashboard.

From your [Cloudflare dashboard](https://dash.cloudflare.com/)

1. Navigate to the **Images** link
2. Select **Transformations**
3. Click the **Enable** button on the bucket you would like to have transformations for

![docs/mask_democf_images_transformations-steps.png](https://images.azydeco.com/docs/mask_democf_images_transformations-steps.png )

You can now use the transformation on your bucket objects.

> Mask

```html
<img src="%PUBLIC_ENDPOINT%/cdn-cgi/image/width=200,quality=75/%ASSET_NAME%" alt="" />
```

> Result

```html
<img src="https://example.com/cdn-cgi/image/width=200,quality=75/myImage.png" alt="" />
```

### Responsive with srcset

> Mask

```html
<img
  srcset="%PUBLIC_ENDPOINT%/cdn-cgi/image/width=480,quality=75/%ASSET_NAME% 480w, %PUBLIC_ENDPOINT%/cdn-cgi/image/width=800,quality=75/%ASSET_NAME% 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="%PUBLIC_ENDPOINT%/cdn-cgi/image/width=800,quality=75/%ASSET_NAME%"
  alt="my responsive image" />

```

> Result

```html
<img
  srcset="https://example.com/cdn-cgi/image/width=480,quality=75/myImage.png 480w, https://example.com/cdn-cgi/image/width=800,quality=75/myImage.png 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="https://example.com/cdn-cgi/image/width=800,quality=75/myImage.png"
  alt="my responsive image" />
```
