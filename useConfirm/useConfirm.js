export const useConfirm = (message = "Are you sure?", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = () => {
    confirm(message) ? onConfirm() : onCancel();
  };

  return confirmAction;
};
