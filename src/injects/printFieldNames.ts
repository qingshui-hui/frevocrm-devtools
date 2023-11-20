// @ts-nocheck

export function printFieldNames() {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');
  if (view === 'Edit') {
    return printFieldNamesForEditView()
  }
  if (view === 'Detail') {
    return printFieldNamesForDetailView()
  }
  alert('cannot call in this page')

  function printFieldNamesForDetailView() {
    $('.fieldLabel').toArray().forEach(elem => {
      if (!elem.id) return
      const filedName = elem.id.split('fieldLabel_')[1]
      elem.insertAdjacentHTML('beforeend', `<div>${filedName}</div>`)
    })
  }
  function printFieldNamesForEditView() {
    const module = app.module();

    const setFieldName = (elem, fieldName) => {
      if (!fieldName) return;
      elem.closest('td').previousSibling.insertAdjacentHTML('beforeend', `<div>${fieldName}</div>`);
    }

    document.querySelectorAll(`[id^="${module}_editView_fieldName_"]`).forEach(elem => {
      const fieldName = $(elem).attr('name');
      setFieldName(elem, fieldName);
    });

    // セレクトボックス
    document.querySelectorAll('td.fieldValue select[data-fieldname]').forEach(elem => {
      const fieldName = $(elem).data('fieldname');
      setFieldName(elem, fieldName);
    });

    // 関連フィールド
    document.querySelectorAll('td.fieldValue .sourceField').forEach(elem => {
      const fieldName = $(elem).attr('name');
      setFieldName(elem, fieldName);
    });
  }
}
