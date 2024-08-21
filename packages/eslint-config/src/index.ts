import tseslint from 'typescript-eslint';

export { default as commencisBaseConfig } from '@/configs/base';
export { default as commencisNextConfig } from '@/configs/next';
export { default as commencisPrettierConfig } from '@/configs/prettier';
export { default as commencisReactConfig } from '@/configs/react';
export { default as commencisReactNativeConfig } from '@/configs/react-native';
export { default as commencisTypescriptConfig } from '@/configs/typescript';
export { default as commencisVueConfig } from '@/configs/vue';

export const defineConfig = tseslint.config;
