import type { CSSProperties } from 'react';

import type {
  RadiusScaleKey,
  SemanticColorTokens,
  ShadowScaleKey,
  SpacingScaleKey
} from '@kanso-ui/tokens';
import { cssVar } from '@kanso-ui/tokens';

export type AtomicStyle = Record<string, string | number>;

type LayoutAlign = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
type LayoutJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type SemanticColorKey = keyof SemanticColorTokens;

export type AtomProps = {
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: LayoutAlign;
  justify?: LayoutJustify;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingScaleKey;
  p?: SpacingScaleKey;
  px?: SpacingScaleKey;
  py?: SpacingScaleKey;
  pt?: SpacingScaleKey;
  pr?: SpacingScaleKey;
  pb?: SpacingScaleKey;
  pl?: SpacingScaleKey;
  m?: SpacingScaleKey;
  mx?: SpacingScaleKey;
  my?: SpacingScaleKey;
  mt?: SpacingScaleKey;
  mr?: SpacingScaleKey;
  mb?: SpacingScaleKey;
  ml?: SpacingScaleKey;
  radius?: RadiusScaleKey;
  shadow?: ShadowScaleKey;
  bg?: SemanticColorKey;
  color?: SemanticColorKey;
  borderColor?: SemanticColorKey;
  borderWidth?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
};

const spacingToStyle = (
  style: AtomicStyle,
  token: SpacingScaleKey | undefined,
  properties: string[]
) => {
  if (!token) return;
  const value = cssVar(['spacing', token]);
  properties.forEach((property) => {
    style[property] = value;
  });
};

const semanticColorToStyle = (
  style: AtomicStyle,
  token: SemanticColorKey | undefined,
  property: string
) => {
  if (!token) return;
  style[property] = cssVar(['color', 'semantic', token]);
};

export const atoms = (props: AtomProps = {}): AtomicStyle => {
  const style: AtomicStyle = {};

  if (props.display) {
    style.display = props.display;
  }

  if (props.direction) {
    style.flexDirection = props.direction;
  }

  if (props.align) {
    style.alignItems = props.align;
  }

  if (props.justify) {
    style.justifyContent = props.justify;
  }

  if (props.wrap) {
    style.flexWrap = props.wrap;
  }

  spacingToStyle(style, props.gap, ['gap']);

  spacingToStyle(style, props.p, ['padding']);
  spacingToStyle(style, props.px, ['paddingLeft', 'paddingRight']);
  spacingToStyle(style, props.py, ['paddingTop', 'paddingBottom']);
  spacingToStyle(style, props.pt, ['paddingTop']);
  spacingToStyle(style, props.pr, ['paddingRight']);
  spacingToStyle(style, props.pb, ['paddingBottom']);
  spacingToStyle(style, props.pl, ['paddingLeft']);

  spacingToStyle(style, props.m, ['margin']);
  spacingToStyle(style, props.mx, ['marginLeft', 'marginRight']);
  spacingToStyle(style, props.my, ['marginTop', 'marginBottom']);
  spacingToStyle(style, props.mt, ['marginTop']);
  spacingToStyle(style, props.mr, ['marginRight']);
  spacingToStyle(style, props.mb, ['marginBottom']);
  spacingToStyle(style, props.ml, ['marginLeft']);

  if (props.radius) {
    style.borderRadius = cssVar(['radius', props.radius]);
  }

  if (props.shadow) {
    style.boxShadow = cssVar(['shadow', props.shadow]);
  }

  semanticColorToStyle(style, props.bg, 'background');
  semanticColorToStyle(style, props.color, 'color');
  semanticColorToStyle(style, props.borderColor, 'borderColor');

  if (props.borderWidth) {
    style.borderWidth = props.borderWidth;
    style.borderStyle = style.borderStyle ?? 'solid';
  }

  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.minWidth) {
    style.minWidth = props.minWidth;
  }
  if (props.maxWidth) {
    style.maxWidth = props.maxWidth;
  }
  if (props.minHeight) {
    style.minHeight = props.minHeight;
  }
  if (props.maxHeight) {
    style.maxHeight = props.maxHeight;
  }

  return style;
};

type MergeableStyle = Record<string, unknown> | CSSProperties;

export const mergeAtoms = (
  ...styles: Array<MergeableStyle | undefined>
): Record<string, unknown> => Object.assign({}, ...styles.filter(Boolean));

