
/* Automatically generated by './build/build-entry.js' */

import ActionSheet from '../packages/actionSheet'
import Badge from '../packages/badge'
import Button from '../packages/button'
import Cell from '../packages/cell'
import CellGroup from '../packages/cellGroup'
import Checkbox from '../packages/checkbox'
import CheckboxGroup from '../packages/checkboxGroup'
import Collapse from '../packages/collapse'
import CollapseItem from '../packages/collapseItem'
import DateTimePicker from '../packages/dateTimePicker'
import Icon from '../packages/icon'
import InfiniteLoad from '../packages/infiniteLoad'
import Input from '../packages/input'
import InputNumber from '../packages/inputNumber'
import Lazyload from '../packages/lazyload'
import Loading from '../packages/loading'
import MessageBox from '../packages/messageBox'
import Navbar from '../packages/navbar'
import NoticeBar from '../packages/noticeBar'
import Picker from '../packages/picker'
import PickerView from '../packages/pickerView'
import Popup from '../packages/popup'
import Progress from '../packages/progress'
import PullRefresh from '../packages/pullRefresh'
import Radio from '../packages/radio'
import RadioGroup from '../packages/radioGroup'
import Rate from '../packages/rate'
import Search from '../packages/search'
import Slider from '../packages/slider'
import Step from '../packages/step'
import Steps from '../packages/steps'
import Switch from '../packages/switch'
import Swipe from '../packages/swipe'
import SwipeItem from '../packages/swipeItem'
import Tab from '../packages/tab'
import Tabs from '../packages/tabs'
import Tabbar from '../packages/tabbar'
import TabbarItem from '../packages/tabbarItem'
import Tag from '../packages/tag'
import Toast from '../packages/toast'
import locale from './locale'

const components = [
  ActionSheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseItem,
  DateTimePicker,
  Icon,
  InfiniteLoad,
  Input,
  InputNumber,
  Lazyload,
  Navbar,
  NoticeBar,
  Picker,
  PickerView,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Search,
  Slider,
  Step,
  Steps,
  Switch,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Tag,
  Toast,
  Loading.Indicator,
  MessageBox.jmMessageBox
]

const install = (Vue, config = {}) => {
  locale.use(config.locale)
  locale.i18n(config.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$toast = Toast
  Vue.prototype.$loading = Loading.loading
  Vue.prototype.$messageBox = MessageBox.MessageBox

  Vue.use(Lazyload, config.lazyload)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.7.0',
  ActionSheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseItem,
  DateTimePicker,
  Icon,
  InfiniteLoad,
  Input,
  InputNumber,
  Lazyload,
  Loading,
  MessageBox,
  Navbar,
  NoticeBar,
  Picker,
  PickerView,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Search,
  Slider,
  Step,
  Steps,
  Switch,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Tag,
  Toast
}
