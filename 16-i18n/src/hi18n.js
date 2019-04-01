import {
  I18nComponent
} from 'jinge';

/**
 * 在中大型前端项目中，模块的层次可能很深，导致多语言的 key 
 *   可能很长，为了在模板中也可以统一指定 key 的前缀，
 *   可以生成具有统一前缀的组件并暴露给模板使用。
 */
export default I18nComponent.prefix('hello');
