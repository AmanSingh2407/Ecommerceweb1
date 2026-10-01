import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { AlertTriangle } from 'lucide-react';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  isDanger = true
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-md">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl shrink-0 ${isDanger ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600' : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'}`}>
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <Button variant="outline" size="md" onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          variant={isDanger ? 'danger' : 'primary'}
          size="md"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};
