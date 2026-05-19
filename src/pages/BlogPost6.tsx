import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostEchoSystem() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 flex space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            Back to Blog
          </Button>
        </div>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">Game Design</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>March 30, 2026</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Designing the Echo System: A Hybrid Progression Mechanic for Roguelite Games
          </h1>

          <p className="text-xl text-muted-foreground">
            How combining Hades-style run powers with Hollow Knight-style permanent traversal abilities creates an addictive, exploration-driven gameplay loop that rewards both short runs and long-term mastery.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
          {/* TODO: Replace with actual hero image for the Echo System post */}
          <img
            src="/placeholder.svg"
            alt="Echo System roguelite game design concept art"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>

        <div className="prose prose-xl max-w-none dark:prose-invert space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Core Idea</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Picture a 2D action game where you explore a dying world, gain temporary run powers in the style of Hades, unlock permanent world traversal abilities like Hollow Knight, and face methodical, punishing bosses inspired by Dark Souls. That's the foundation of what I've been calling the <strong>Echo System</strong>—a hybrid progression mechanic that merges run-based excitement with long-term exploration payoff.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most roguelites force a hard choice: either every run resets completely (pure roguelite) or the world is always persistent (pure metroidvania). The Echo System refuses that dichotomy. It asks: what if the run powers were temporary, but the movement abilities were permanent?
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Gameplay Loop</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The loop is deliberately tight and structured around five beats:
            </p>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li><strong>Enter</strong> a procedurally altered region of the world.</li>
              <li><strong>Fight</strong> enemies and collect Echoes—temporary powers that last only for the current run.</li>
              <li><strong>Reach a boss or die</strong>—both outcomes are valid progressions.</li>
              <li><strong>Return to the hub</strong> to unlock permanent abilities and advance the story.</li>
              <li><strong>Re-enter</strong>—the map has expanded, new paths are now accessible.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The critical design insight here comes from Hades: <em>death is expected, not punished</em>. Losing a run doesn't feel like failure because you always return with something—a new Echo configuration, a story fragment, or a permanent ability that opens doors you couldn't open before.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What Are Echoes?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Echoes are temporary power-ups collected during a run—think Hades boons, but with a more thematic framing. They represent fragments of power left behind by those who explored the dying world before you. Each run offers a randomized selection, pushing players toward different playstyles even within a single session.
            </p>
            <div className="bg-muted p-6 rounded-lg border border-border space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Example Echo Powers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Ember Trail</strong> — Fire dash leaves a damage trail behind you.</li>
                <li>• <strong>Resonant Strike</strong> — Critical hits trigger a small explosion.</li>
                <li>• <strong>Shadow Parry</strong> — A successful parry summons a shadow clone that attacks once.</li>
                <li>• <strong>Hemorrhage</strong> — Staying below 30% HP grants a 25% damage boost (the risk mechanic).</li>
                <li>• <strong>Glacial Momentum</strong> — Each dodge roll briefly slows nearby enemies.</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These powers are lost when you die or complete a run. This impermanence is intentional—it keeps each run feeling distinct and prevents the game from devolving into a solved, optimal build that players run on autopilot.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Permanent Abilities: The Metroidvania Layer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Where the Echo System diverges from pure roguelites is in its permanent progression layer. Between runs, players unlock traversal abilities that persist across all future runs:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Wall Climb</strong> — Opens vertical routes previously blocked.</li>
              <li>• <strong>Double Jump</strong> — Reaches platforms and shortcuts above ground level.</li>
              <li>• <strong>Barrier Dash</strong> — Passes through translucent barrier walls into new zones.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These permanent abilities don't make runs easier in a direct sense—they expand the map. A player with Barrier Dash can now enter the Sunken Forge biome, which presents entirely new enemies, Echo powers, and boss encounters. Progression feels earned and spatial rather than purely numerical.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Combat Design: Deliberate, Not Frantic</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Echo System only works if the combat is worth building around. Taking cues from Dark Souls, the combat is stamina-based and deliberately paced—fast but never button-mashy. The core action set is intentionally small:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Light Attack</strong> — Quick, low commitment.</li>
              <li>• <strong>Heavy Attack</strong> — High damage, significant stamina cost.</li>
              <li>• <strong>Dodge</strong> — Invincibility frames, direction-dependent.</li>
              <li>• <strong>Parry</strong> — High-risk, high-reward timing window.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              A "Perfect Dodge"—timed at the last possible moment—triggers a brief slow-motion window. This is a pure skill reward: the game becomes more readable and controllable for players who master timing, without being required for progression. It also synergizes with Echoes like Glacial Momentum in satisfying ways.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">World Design: Structured Chaos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The world uses a semi-procedural approach. The high-level map is hand-crafted and interconnected (like Hollow Knight), but within each region, room layouts and enemy placements shift slightly between runs. This creates the roguelite feeling of novelty while preserving the metroidvania sense of place and geography.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Ash Cathedral", desc: "Starting zone. Fallen spires, undead knights. Introduces core mechanics." },
                { name: "Rot Gardens", desc: "Poison-laced ruins. Traps punish greed. Teaches patience." },
                { name: "Sunken Forge", desc: "Lava corridors and vertical shafts. Requires Double Jump to fully explore." },
                { name: "Whispering Depths", desc: "Near-total darkness. Echoes that produce light become essential." },
              ].map((biome) => (
                <div key={biome.name} className="bg-muted p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{biome.name}</h3>
                  <p className="text-sm text-muted-foreground">{biome.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Boss Design: The Bell Keeper</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bosses in this design philosophy are few (3–5 total) but deep. Each fight is a multi-phase encounter that teaches players something about the game's core systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Take "The Bell Keeper" as an example:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">Phase 1 — The Toll</p>
                <p className="text-muted-foreground">Slow, telegraphed heavy swings. Teaches the parry window. Manageable for any Echo build.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">Phase 2 — The Collapse</p>
                <p className="text-muted-foreground">Arena rings begin falling away. Players must manage position as well as attacks. Echoes that enhance mobility become more valuable here.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">Phase 3 — The Dirge</p>
                <p className="text-muted-foreground">Faster, unpredictable combos. The boss now punishes passive play. Risk Echoes like Hemorrhage become tempting but dangerous.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Each attempt—win or lose—teaches the player something. The Echo loadout changes what's optimal per phase. This is the intersection where roguelite variety meets Souls-style mastery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Narrative Without Overhead</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The story is told through environment and failure, not cutscenes. Memory fragments collected during runs unlock cryptic dialogue from NPCs back in the hub. Dying doesn't reset story progress—it often advances it, because NPCs react to your failures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This model, lifted directly from Hades, dramatically reduces narrative production cost while increasing the emotional weight of each run. The world feels alive without requiring expensive cinematics or voiced dialogue trees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Why This Design Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Echo System succeeds because it targets the specific frustrations of each genre it borrows from:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Roguelite fatigue</strong> (running the same map forever) is countered by permanent world expansion.</li>
              <li>• <strong>Metroidvania backtracking drag</strong> is countered by run variety keeping repeated traversal fresh.</li>
              <li>• <strong>Souls-like difficulty walls</strong> are countered by Echo synergies that let players customize the fight to their style.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              It's also <em>scope-realistic</em>. Four biomes, five bosses, thirty enemy types, and ten to fifteen Echo powers is a shippable game with a defined end—something solo developers and small teams can realistically complete and polish.
            </p>
          </div>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground leading-relaxed">
              The Echo System is ultimately a design philosophy as much as a mechanic: respect the player's time across runs while rewarding their investment in the world. Give them power that feels exciting in the moment, and discoveries that feel permanent. That combination—temporary excitement, lasting consequence—is what keeps players coming back.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
