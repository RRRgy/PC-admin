<script>
export default {
  name: 'MenuItem',
  functional: true, // 当前是render组件
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
 
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    // 如果传入的icon, 添加一个svg图标组件标签显示
    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>)
    }

    // 如果传入的title, 添加一个span标签显示
    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
