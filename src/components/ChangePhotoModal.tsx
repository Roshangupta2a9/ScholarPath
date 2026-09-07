import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Camera, 
  Check, 
  Sparkles, 
  RotateCcw, 
  Link as LinkIcon, 
  AlertCircle 
} from 'lucide-react';

interface ChangePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSavePhoto: (newAvatarUrl: string) => void;
  userName: string;
}

// Curated scholar & student avatars for quick selection
const PRESET_AVATARS = [
  {
    id: 'avatar-1',
    label: 'Student Boy 1',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-2',
    label: 'Student Girl 1',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-3',
    label: 'Student Boy 2',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-4',
    label: 'Student Girl 2',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-5',
    label: 'Scholar Youth 1',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-6',
    label: 'Scholar Youth 2',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-7',
    label: 'Young Thinker',
    url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=250&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-8',
    label: 'STEM Explorer',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=250&auto=format&fit=crop&q=80'
  }
];

export const ChangePhotoModal: React.FC<ChangePhotoModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSavePhoto,
  userName
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentAvatar);
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'upload' | 'preset' | 'url'>('upload');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  /**
   * Resizes and square-crops uploaded image client-side to ensure lightweight storage
   * and uniform high quality across all devices.
   */
  const processImageFile = (file: File) => {
    setErrorMessage(null);

    // Validate type
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (JPG, PNG, WEBP, etc.).');
      return;
    }

    // Validate max file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Image size exceeds 10MB. Please choose a smaller photo.');
      return;
    }

    setIsProcessing(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const TARGET_SIZE = 256;
          canvas.width = TARGET_SIZE;
          canvas.height = TARGET_SIZE;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            setSelectedAvatar(event.target?.result as string);
            setIsProcessing(false);
            return;
          }

          // Center crop calculation for optimal avatar framing
          const minDim = Math.min(img.width, img.height);
          const startX = (img.width - minDim) / 2;
          const startY = (img.height - minDim) / 2;

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(
            img,
            startX, startY, minDim, minDim,
            0, 0, TARGET_SIZE, TARGET_SIZE
          );

          // Compress to clean JPEG data URL
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setSelectedAvatar(compressedDataUrl);
          setIsProcessing(false);
        } catch (err) {
          console.error('Error processing image:', err);
          setSelectedAvatar(event.target?.result as string);
          setIsProcessing(false);
        }
      };

      img.onerror = () => {
        setErrorMessage('Unable to process the image file. Please try another image.');
        setIsProcessing(false);
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = () => {
      setErrorMessage('Failed to read image file.');
      setIsProcessing(false);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setErrorMessage(null);
    try {
      const parsed = new URL(urlInput.trim());
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        setSelectedAvatar(urlInput.trim());
      } else {
        setErrorMessage('Please enter a valid HTTP or HTTPS image URL.');
      }
    } catch {
      setErrorMessage('Please enter a valid image URL format.');
    }
  };

  const handleSave = () => {
    if (!selectedAvatar) return;
    onSavePhoto(selectedAvatar);
    onClose();
  };

  const handleResetToDefault = () => {
    setSelectedAvatar(PRESET_AVATARS[0].url);
  };

  return (
    <div 
      id="change-photo-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="change-photo-modal-card"
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Change Profile Picture</h3>
              <p className="text-[11px] text-slate-500">Update your student portrait on EduCampus</p>
            </div>
          </div>
          <button
            id="close-photo-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Avatar Live Preview */}
          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="relative group">
              <img
                src={selectedAvatar}
                alt={userName}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-indigo-500/20 shadow-lg"
              />
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-indigo-600 text-white font-bold text-[10px] rounded-full shadow-xs">
                Preview
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700 mt-3">{userName}</p>
            <p className="text-[11px] text-slate-400">This photo will appear in your navbar, profile, and certificates</p>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex rounded-xl bg-slate-100 p-1">
            <button
              id="tab-upload-photo"
              onClick={() => { setActiveTab('upload'); setErrorMessage(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'upload' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload File</span>
            </button>
            <button
              id="tab-preset-avatars"
              onClick={() => { setActiveTab('preset'); setErrorMessage(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'preset' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Preset Avatars</span>
            </button>
            <button
              id="tab-url-photo"
              onClick={() => { setActiveTab('url'); setErrorMessage(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'url' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Image URL</span>
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: FILE UPLOAD (Click or Drag & Drop) */}
          {activeTab === 'upload' && (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileChange}
                className="hidden"
                id="student-photo-file-input"
              />

              <div
                id="photo-drop-zone"
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                  isDragOver
                    ? 'border-indigo-500 bg-indigo-50/60 scale-[1.01]'
                    : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-slate-800">
                  {isProcessing ? 'Processing image...' : 'Click to browse or drag & drop photo here'}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Supports JPG, PNG, WEBP or GIF (Max 10MB)
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="mt-3 px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Choose Photo from Device</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PRESET SCHOLAR AVATARS */}
          {activeTab === 'preset' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Choose from student portraits and academic avatars:
              </p>
              <div className="grid grid-cols-4 gap-2.5">
                {PRESET_AVATARS.map((av) => {
                  const isSelected = selectedAvatar === av.url;
                  return (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => {
                        setSelectedAvatar(av.url);
                        setErrorMessage(null);
                      }}
                      className={`group relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                        isSelected
                          ? 'border-indigo-600 ring-2 ring-indigo-600/30 scale-105 shadow-md'
                          : 'border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      <img
                        src={av.url}
                        alt={av.label}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-indigo-900/40 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: IMAGE WEB URL */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Paste an online image link (JPG, PNG, or cloud URL):
              </p>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/30"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  Preview
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200/60 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              id="save-photo-submit-btn"
              type="button"
              onClick={handleSave}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Save Profile Photo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
