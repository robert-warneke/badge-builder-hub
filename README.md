# Badge Builder Hub
Badge Builder Hub is a versatile tool that empowers you to effortlessly create stunning badges for various purposes. Personalize your badges to showcase achievements, highlight skills, or add a touch of uniqueness to your projects. With a wide range of customization options available, you have the freedom to tailor each badge to suit your specific needs.

---
<details>
<summary><h2>Split Badge</h2></summary>

### 🖥️ Demo

Default (Unmodified)

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge)
```

---

Custom `leftText` & `rightText`

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World)
```

---

Custom `leftText`, `rightText`, & `textColor`

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&textColor=000)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&textColor=000)
```

---

Custom `leftText`, `rightText`, `textColor`, & `leftTextColor`

&#9432; `leftTextColor` & `rightTextColor` overrides `textColor`

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&textColor=000&leftTextColor=f5f5f5)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&textColor=000&leftTextColor=f5f5f5)
```

---

Custom `leftText`, `rightText`, `leftSectionColor`, & `rightSectionColor`

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&leftSectionColor=333&rightSectionColor=6660e0)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&leftSectionColor=333&rightSectionColor=6660e0)
```

---

Custom `leftText`, `rightText`, `leftTextColor`, `rightTextColor`, `leftSectionColor`, & `rightSectionColor`

![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&leftTextColor=3BA6E5&rightTextColor=333&leftSectionColor=333&rightSectionColor=3BA6E5)

```md
![Split-Badge](https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World&leftTextColor=3BA6E5&rightTextColor=333&leftSectionColor=333&rightSectionColor=3BA6E5)
```

---

### ⚙️ Customization

You can customize the 'Split Badge' by providing query parameters in the URL.

Query parameters are added after the main URL using the '?' character, followed by a series of key=value pairs, separated by '&'.

> 🔍 Example:
> ```md
> https://badge-builder-hub.vercel.app/api/split-badge?leftText=Hello&rightText=World
> ```
>
> In this example:
> - `https://badge-builder-hub.vercel.app/api/split-badge` is the main URL.
> - `'leftText'` is a parameter key and `'Hello'` is its value.
> - `'rightText'` is another parameter key and `'World'` is its value.

##### Available Query Parameters

| Query Parameters    | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `leftText`          | Customize the text on the left.                               |
| `rightText`         | Customize the text on the right.                              |
| `boldText`          | Set to 'true' to bold the `leftText` and `rightText`. Default is 'false'. |
| `boldLeftText`      | Set to 'true' to bold the `leftText`. Default is 'false'.                 |
| `boldRightText`     | Set to 'true' to bold the `rightText`. Default is 'false'.                |
| `textColor`         | Customize the color of the text.                              |
| `leftTextColor `    | Customize the color of the left text. Overrides `textColor`.  |
| `rightTextColor `   | Customize the color of the right text. Overrides `textColor`. |
| `leftSectionColor`  | Customize the color of the left section.                      |
| `rightSectionColor` | Customize the color of the right section.                     |

---

</details>