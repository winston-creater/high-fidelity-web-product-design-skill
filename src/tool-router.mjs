const ROUTES = {
  reference_capture: [
    { key: 'playwright_mcp', route: 'Playwright MCP', auth: false },
    { key: 'chrome_devtools_mcp', route: 'Chrome DevTools MCP', auth: false },
    { key: 'playwright_local', route: 'Local Playwright capture script', auth: false }
  ],
  render: [
    { key: 'image_generation', route: 'Image generation / Codex image skill', auth: false }
  ],
  figma: [
    { key: 'figma_mcp', route: 'Figma MCP native prototype generation', auth: true },
    { key: 'figma_rest_api', route: 'Figma REST/API bridge', auth: true }
  ],
  frontend: [
    { key: 'code_connect', route: 'Figma Code Connect + component registry', auth: true },
    { key: 'figma_mcp', route: 'Figma MCP context + component contracts', auth: true }
  ],
  qa: [
    { key: 'visual_diff', route: 'Visual diff comparison', auth: false },
    { key: 'axe_core', route: 'axe-core accessibility checks', auth: false },
    { key: 'lighthouse', route: 'Lighthouse quality checks', auth: false },
    { key: 'playwright_local', route: 'Local Playwright interaction tests', auth: false }
  ]
};

const FALLBACKS = {
  reference_capture: 'Use scripts/collect-page-signals.mjs if Playwright is installed; otherwise request screenshots or HTML from the user.',
  render: 'Output render prompt files only.',
  figma: 'Output outputs/05-figma/figma-generation-contract.json only; do not claim a Figma file was created.',
  frontend: 'Generate frontend implementation spec from canonical spec and component contracts.',
  qa: 'Output manual QA checklist and fidelity scorecard.'
};

export function planRoute(config = {}, phase = 'all') {
  const tools = config.tools || config || {};
  const phases = phase === 'all' ? Object.keys(ROUTES) : [phase];

  return {
    generated_at: new Date().toISOString(),
    routes: phases.map((p) => {
      const candidates = ROUTES[p] || [];
      const selected = candidates.find((candidate) => Boolean(tools[candidate.key]));
      if (selected) {
        return {
          phase: p,
          selected_route: selected.route,
          tools_to_call: [selected.key],
          fallback: FALLBACKS[p] || 'Manual fallback.',
          requires_auth: Boolean(selected.auth),
          notes: selected.auth ? ['Confirm authentication before claiming output was created.'] : []
        };
      }
      return {
        phase: p,
        selected_route: 'fallback',
        tools_to_call: [],
        fallback: FALLBACKS[p] || 'Manual fallback.',
        requires_auth: false,
        notes: ['No preferred tool is marked as available.']
      };
    })
  };
}
