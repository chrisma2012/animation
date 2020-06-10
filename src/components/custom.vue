 
<script>
export default {
  functional: true,
  render(createElement, context) {
    console.log(context);
    console.log(context.slots());
    return <div>{context.scopedSlots.default()}</div>;
  }
};
</script>