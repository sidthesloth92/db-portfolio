/**
 * SVGR template for generating icons.
 */
function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  componentName = 'Icon' + componentName.name.substr(3);
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const typeScriptTpl = template.smart({ plugins });

  return typeScriptTpl.ast`
      ${imports}
      ${interfaces}
      const ${
        componentName + `: React.FC<React.SVGProps<SVGSVGElement>>`
      } = (${props}) => {
        return ${jsx};
      }
      export default ${componentName};
  `;
}
module.exports = defaultTemplate;
