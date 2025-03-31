# @ducdev2k1/avatar-initials

## 🌟 Avatar Component with Initials

This is a Vue 3 component that generates an avatar with initials based on a full name. The avatar has a circular shape and automatically assigns a background color based on the name.

---

## 🚀 Installation

```sh
npm install @ducdev2k1/avatar-initials
```

---

## 🛠 Usage

```vue
<script setup>
import AvatarInitials from "@ducdev2k1/avatar-initials";
</script>

<template>
  <AvatarInitials fullName="John Doe" size="50" />
</template>
```

### Props

| Prop           | Type               | Default   | Description                                                                   |
| -------------- | ------------------ | --------- | ----------------------------------------------------------------------------- |
| `fullName`     | `string`           | `""`      | The full name to generate initials.                                           |
| `size`         | `number \| string` | `44`      | The size of the avatar.                                                       |
| `onlyColor`    | `boolean`          | `false`   | If `true`, the avatar will use a default color instead of a name-based color. |
| `defaultColor` | `string`           | `#0A6CCB` | The default background color of the avatar.                                   |

---

## 🌈 Features

- Generates initials from the provided full name.
- Automatically assigns a background color based on the name.
- Customizable size.
- Option to use a fixed color.

---

## 🔗 License

Giấy phép MIT © 2025 [ducdev2k1](https://github.com/ducdev2k1)

---

# @ducdev2k1/avatar-initials (Tiếng Việt)

## 🌟 Component Avatar với Chữ Viết Tắt

Đây là một component Vue 3 giúp tạo avatar hình tròn với chữ viết tắt từ tên đầy đủ. Avatar sẽ tự động đặt màu nền dựa trên tên.

---

## 🚀 Cài đặt

```sh
npm install @ducdev2k1/avatar-initials
```

---

## 🛠 Cách sử dụng

```vue
<script setup>
import AvatarInitials from "@ducdev2k1/avatar-initials";
</script>

<template>
  <AvatarInitials fullName="Nguyễn Văn A" size="50" />
</template>
```

### Props

| Prop           | Loại               | Mặc định  | Mô tả                                                               |
| -------------- | ------------------ | --------- | ------------------------------------------------------------------- |
| `fullName`     | `string`           | `""`      | Tên đầy đủ để tạo chữ viết tắt.                                     |
| `size`         | `number \| string` | `44`      | Kích thước của avatar.                                              |
| `onlyColor`    | `boolean`          | `false`   | Nếu `true`, avatar sẽ sử dụng màu cố định thay vì màu dựa trên tên. |
| `defaultColor` | `string`           | `#0A6CCB` | Màu nền mạc định của avatar.                                        |

---

## 🌈 Tính năng

- Tạo chữ viết tắt từ tên đầy đủ.
- Tự động đặt màu nền dựa trên tên.
- Tuỳ chỉnh kích thước.
- Có thể sử dụng màu cố định.

---

## 🔗 Giấy phép

Giấy phép MIT © 2025 [ducdev2k1](https://github.com/ducdev2k1)
