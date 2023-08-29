# marginTop塌陷最好的处理方式

伪元素：

```css
.clearfix {
  &::before {
    content: '';
    display:table;
  }
  &::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: '';
    clear: both;
    height: 0;
  }
}
```