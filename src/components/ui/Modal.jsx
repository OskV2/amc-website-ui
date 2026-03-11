import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Modal = ({ isOpen, onClose, title, description, jsxContent }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
          <DialogPanel className="w-full max-w-xl rounded-2xl bg-zinc-900/95 border border-zinc-700/40 p-6 sm:p-8 backdrop-blur-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/50">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-zinc-100"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {title}
                </DialogTitle>
                <div className="w-10 h-0.5 bg-amber-400/40 mt-2" />
              </div>
              <button
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors ml-4 shrink-0"
                onClick={onClose}
              >
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            {description && (
              <p className="text-sm leading-relaxed text-zinc-400 mb-4">
                {description}
              </p>
            )}
            {jsxContent && jsxContent}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;