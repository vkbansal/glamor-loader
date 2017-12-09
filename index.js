module.exports = function GlamorLoader(content) {
    if (this.cacheable) this.cacheable();

    return `import { css } from 'glamor';\n css.insert(\`${content}\`)`;
};

