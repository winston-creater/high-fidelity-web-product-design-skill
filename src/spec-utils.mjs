export function summarizeSections(spec) {
  const pages = spec.pages || [];
  return pages.flatMap((page) => (page.sections || []).map((section, index) => ({
    pageId: page.id,
    order: index + 1,
    id: section.id,
    name: section.name,
    purpose: section.purpose,
    components: section.components || []
  })));
}

export function defaultThresholds() {
  return {
    desktop_visual_fidelity: 94,
    mobile_visual_fidelity: 92,
    structure_fidelity: 95,
    design_token_fidelity: 95,
    component_contract_fidelity: 95,
    interaction_fidelity: 88,
    responsive_fidelity: 90,
    code_maintainability: 90,
    originality: 95
  };
}

export function validateCanonicalSpec(spec) {
  const errors = [];
  if (!spec || typeof spec !== 'object') errors.push('Spec must be a JSON object.');
  if (!spec.project) errors.push('Missing project.');
  if (!spec.project?.name) errors.push('Missing project.name.');
  if (!spec.project?.type) errors.push('Missing project.type.');
  if (!spec.project?.primary_conversion) errors.push('Missing project.primary_conversion.');
  if (!Array.isArray(spec.pages) || spec.pages.length === 0) errors.push('Missing non-empty pages array.');

  for (const [pageIndex, page] of (spec.pages || []).entries()) {
    if (!page.id) errors.push(`pages[${pageIndex}].id is required.`);
    if (!page.name) errors.push(`pages[${pageIndex}].name is required.`);
    if (!page.goal) errors.push(`pages[${pageIndex}].goal is required.`);
    if (!Array.isArray(page.sections) || page.sections.length === 0) errors.push(`pages[${pageIndex}].sections must be non-empty.`);
    for (const [sectionIndex, section] of (page.sections || []).entries()) {
      if (!section.id) errors.push(`pages[${pageIndex}].sections[${sectionIndex}].id is required.`);
      if (!section.name) errors.push(`pages[${pageIndex}].sections[${sectionIndex}].name is required.`);
      if (!section.purpose) errors.push(`pages[${pageIndex}].sections[${sectionIndex}].purpose is required.`);
      if (!Array.isArray(section.components)) errors.push(`pages[${pageIndex}].sections[${sectionIndex}].components must be an array.`);
    }
  }

  if (!spec.tokens_ref) errors.push('Missing tokens_ref.');
  if (!spec.components_ref) errors.push('Missing components_ref.');
  if (!spec.interactions_ref) errors.push('Missing interactions_ref.');
  return errors;
}
