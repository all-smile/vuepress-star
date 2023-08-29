# diff算法
众所周知，前端开发中，性能消耗最大的就是DOM操作。由此出现了把真实DOM树转换成Javascript对象树的方法，也就是Virtual DOM。

每次数据更新后，重新计算Virtual DOM，并和上一次生成的Virtual DOM做对比，对发生变化的部分做批量更新。

diff作为virtual dom 的加速器，是整个界面渲染的基础和性能保障。

## 传统diff算法
计算一棵树形结构转换成另一棵树形结构的最少操作，
传统diff算法循环递归对节点进行依次对比，效率低下，算法复杂度达到O(n3)

在React中，将Vitual DOM树转换成actual DOM树的最少操作的过程称为调和，diff算法便是调和的具体实现。
React 将O(n3)复杂度的问题转换成O(n)复杂度的问题

对DOM操作的可能性进行分析，归纳为三个不同的问题，并进行解决
## diff策略：

1. Web UI中DOM节点的跨层级的移动操作特别少，可以忽略不计。 tree diff
2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。 component diff
3. 对于同一层级的一组子节点，它们可以通过唯一id进行区分。  element diff


### tree diff
只对相同层级的DOM节点进行比较，即同一父节点下的所有子节点。当发现节点已经不存在时，该节点及其子节点会被完全删除，不会用于进一步的比较。

如果存在节点的跨层级操作，例如将A节点下的C节点（下有C1, C2子节点）整个移动到B节点，

diff执行情况是 `create C -> create C1 -> create C2 -> delete C`

对编写DOM节点有一定的约束，**官方建议不要进行DOM节点的跨层级操作**。保持稳定的DOM结构有助于性能提升。

### component diff
如果是同一类型的组件，按照原策略继续比较Virtual DOM 即可，

如果不是，将该组件判断为 dirty component，从而替换整个组件下的所有子节点

对于同一类型的组件，React允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行diff算法分析。

### element diff
当节点处于同一层级时，diff提供了三种节点操作： INSERT_MARKUP(插入)，MOVE_EXISTING(移动)，REMOVE_NODE(删除)

列表循环时添加唯一的key进行区分，如果节点只是纯位置上的变动，则进行移动操作，而不是删除重新创建操作。

5000项成绩排名榜单，
把key设置成序号，这么做时非常低效的，这个key是用来做virtual dom diff的，如果没有把它和列表项的唯一信息（学号）相匹配，相当于用了一个随机键，那么不论有没有相同项，在进行diff的时候，更新都会全部重新渲染。










