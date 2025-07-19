'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, X, Check, AlertCircle } from 'lucide-react';

// File upload hook inspired by OriginUI
export function useFileUpload({
  multiple = false,
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = '*/*',
  onUpload,
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState([]);

  const validateFile = useCallback((file) => {
    const errors = [];
    
    if (maxSize && file.size > maxSize) {
      errors.push(`File size exceeds ${(maxSize / (1024 * 1024)).toFixed(1)}MB`);
    }
    
    if (accept !== '*/*') {
      const acceptedTypes = accept.split(',').map(type => type.trim());
      const fileType = file.type;
      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return fileType.match(type.replace('*', '.*'));
      });
      
      if (!isAccepted) {
        errors.push(`File type not accepted. Accepted: ${accept}`);
      }
    }
    
    return errors;
  }, [maxSize, accept]);

  const addFiles = useCallback((newFiles) => {
    const fileArray = Array.from(newFiles);
    const validFiles = [];
    const fileErrors = [];

    fileArray.forEach((file) => {
      const validation = validateFile(file);
      if (validation.length === 0) {
        validFiles.push({
          file,
          id: Math.random().toString(36).substr(2, 9),
          preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
          status: 'ready'
        });
      } else {
        fileErrors.push({
          file: file.name,
          errors: validation
        });
      }
    });

    setFiles(prev => {
      const combined = multiple ? [...prev, ...validFiles] : validFiles;
      return combined.slice(0, maxFiles);
    });
    
    setErrors(fileErrors);
    
    if (onUpload && validFiles.length > 0) {
      onUpload(validFiles);
    }
  }, [multiple, maxFiles, validateFile, onUpload]);

  const removeFile = useCallback((id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  }, []);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  }, [addFiles]);

  const handleFileChange = useCallback((e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      addFiles(selectedFiles);
    }
  }, [addFiles]);

  return {
    files,
    isDragging,
    errors,
    addFiles,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
    clearFiles: () => setFiles([]),
  };
}

// File Upload Component inspired by OriginUI
export default function FileUploadComponent() {
  const {
    files,
    isDragging,
    errors,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
  } = useFileUpload({
    multiple: true,
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: 'image/*,application/pdf,.doc,.docx',
    onUpload: (files) => {
      console.log('Files uploaded:', files);
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">File Upload</h3>
        <p className="text-sm text-slate-400">
          Drag and drop files here, or click to browse. Supports images, PDFs, and documents.
        </p>
      </div>

      {/* Drop Zone */}
      <motion.div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${isDragging 
            ? 'border-purple-500 bg-purple-500/10' 
            : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
          }
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type="file"
          multiple
          accept="image/*,application/pdf,.doc,.docx"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <motion.div
          animate={{
            y: isDragging ? -5 : 0,
            scale: isDragging ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Upload className={`mx-auto h-12 w-12 mb-4 ${isDragging ? 'text-purple-400' : 'text-slate-400'}`} />
          <p className={`text-lg font-medium mb-2 ${isDragging ? 'text-purple-300' : 'text-white'}`}>
            {isDragging ? 'Drop files here' : 'Upload files'}
          </p>
          <p className="text-sm text-slate-400">
            PNG, JPG, PDF, DOC up to 5MB each
          </p>
        </motion.div>
      </motion.div>

      {/* Error Messages */}
      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 space-y-2"
          >
            {errors.map((error, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-medium text-red-300">{error.file}: </span>
                  <span className="text-red-400">{error.errors.join(', ')}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* File List */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6"
          >
            <h4 className="text-sm font-medium text-white mb-3">
              Uploaded Files ({files.length})
            </h4>
            <div className="space-y-2">
              {files.map((fileItem) => (
                <motion.div
                  key={fileItem.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  {fileItem.preview ? (
                    <img
                      src={fileItem.preview}
                      alt={fileItem.file.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  ) : (
                    <div className="h-10 w-10 bg-slate-700 rounded flex items-center justify-center">
                      <File className="h-5 w-5 text-slate-400" />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {fileItem.file.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {(fileItem.file.size / (1024 * 1024)).toFixed(1)} MB
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <button
                      onClick={() => removeFile(fileItem.id)}
                      className="p-1 hover:bg-slate-700 rounded transition-colors"
                    >
                      <X className="h-4 w-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}