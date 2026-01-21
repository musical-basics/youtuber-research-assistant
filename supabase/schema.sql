-- 1. Projects Table (Stores your video ideas)
create table projects (
  id uuid default gen_random_uuid() primary key,
  user_id text not null, -- This will match the Clerk User ID
  title text not null,
  description text,
  status text default 'draft', -- 'draft', 'researching', 'scripted'
  created_at timestamp with time zone default now()
);

-- 2. Research Items (Stores the stuff Exa finds)
create table research_items (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references projects(id) on delete cascade,
  url text not null,
  title text,
  content text, -- We will store the scraped text here for the AI to read
  vibe_score text, -- 'High', 'Medium', 'Low'
  created_at timestamp with time zone default now()
);

-- 3. Scripts (Stores the generated script)
create table scripts (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references projects(id) on delete cascade,
  content text, -- The full script markdown
  version int default 1,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS) so users can't see each other's projects
alter table projects enable row level security;
alter table research_items enable row level security;
alter table scripts enable row level security;

-- Create a policy that allows users to see ONLY their own projects
create policy "Users can see their own projects"
on projects for all
using (auth.uid()::text = user_id);
-- Note: For simplicity in Vibe Coding, we often skip strict RLS on the child tables 
-- if we handle logic in the API, but for production, you'd add policies there too.
