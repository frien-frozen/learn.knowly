'use client';
import React, { useState } from 'react';
import { Clock, User, PlayCircle, CheckCircle, Circle, BadgeCheck } from 'lucide-react';

export default function LessonPlayer({ topic }: { topic: any }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const getYouTubeID = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeID(topic?.ytLink);

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out">
      {/* Dynamic Topic Title */}
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-3xl font-black text-[#101828] flex items-center gap-3">
          <PlayCircle className="w-8 h-8 text-emerald-500" />
          {topic?.title || 'Lesson Details'}
        </h2>
      </div>

      {!videoId ? (
        /* Coming Soon State */
        <div className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-inner">
          <div className="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center mb-6">
            <Clock className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#101828]">Lesson in Production</h3>
          <p className="text-gray-500 font-medium mt-3 max-w-md text-lg">
            Our educators are currently crafting this lesson. Check back soon for the full video module!
          </p>
        </div>
      ) : (
        /* Active Video State */
        <div className="space-y-6">
          <div className="relative w-full overflow-hidden rounded-3xl bg-black border border-gray-200 shadow-xl aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={topic?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Teacher Profile Card */}
          {topic?.teacher && (
            <div className="flex items-center gap-5 mt-8 transition-all">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                {topic.teacher.profilePic ? (
                  <img
                    src={`/api/teacher-image?url=${encodeURIComponent(topic.teacher.profilePic)}`}
                    alt={topic.teacher.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <User className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-1">Teacher:</p>
                <div className="flex items-center gap-1.5">
                    <h4 className="text-xl font-black text-[#101828]">{topic.teacher.name}</h4>
                    <BadgeCheck className="w-5 h-5 text-white fill-blue-500 ml-1" />
                </div>
                <p className="text-sm text-gray-500 font-medium mt-0.5 line-clamp-2">
                  {topic.teacher.bio || "Knowly Verified Educator"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
