# 🎨 Color Selector Web Component

A reusable Web Component for selecting colors, fully customizable and compatible with HTML forms.

## 🚀 Installation

You can install the component via **npm**:

```sh
npm install eit-color-selector
```

Or use it directly in your HTML via **CDN**:

```html
<script type="module" src="https://unpkg.com/eit-color-selector@latest/eit-color-selector.js"></script>
```

---

## 🛠️ Basic Usage

### Import the component

```javascript
import 'eit-color-selector/eit-color-selector.js';
```

### Use in your HTML

Once imported, you can use the component in your HTML like this:

```html
<eit-color-selector name="color"></eit-color-selector>
```

### 📌 **Using Inside a Form**

If used inside a form, it will submit the selected color:

```html
<form action="submit.php" method="post">
    <label>Select a color:</label>
    <eit-color-selector name="color"></eit-color-selector>
    <button type="submit">Submit</button>
</form>
```

The selected color will be sent under the `color` field.

---

## 🎨 Customization

You can customize both the available colors and the appearance of the component using attributes and CSS.

### 📌 **Custom Color List**
To define a custom set of colors, use the `colors` attribute, passing a JSON string:

```html
<eit-color-selector name="favoriteColor" colors='[
    {"name": "Red", "value": "#ff0000"},
    {"name": "Green", "value": "#00ff00"},
    {"name": "Blue", "value": "#0000ff"},
    {"name": "Black", "value": "#000000"},
    {"name": "White", "value": "#ffffff"}
]'></eit-color-selector>
```

### 🎨 **Custom Styling with CSS**
The component exposes CSS variables so you can easily adjust its appearance:

```css
eit-color-selector {
    --color-display-width: 30px;
    --color-display-height: 30px;
    --color-display-border: 3px dashed red;
}
```

| Variable                  | Description                      | Default Value |
|---------------------------|----------------------------------|--------------|
| `--color-display-width`   | Width of the color preview box  | `20px`       |
| `--color-display-height`  | Height of the color preview box | `20px`       |
| `--color-display-border`  | Border style of the preview box | `2px solid #000` |

