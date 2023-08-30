// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.19.1

package db

import (
	"database/sql"
	"database/sql/driver"
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/sqlc-dev/pqtype"
)

type Entities string

const (
	EntitiesRepository       Entities = "repository"
	EntitiesBuildEnvironment Entities = "build_environment"
	EntitiesArtifact         Entities = "artifact"
)

func (e *Entities) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = Entities(s)
	case string:
		*e = Entities(s)
	default:
		return fmt.Errorf("unsupported scan type for Entities: %T", src)
	}
	return nil
}

type NullEntities struct {
	Entities Entities `json:"entities"`
	Valid    bool     `json:"valid"` // Valid is true if Entities is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullEntities) Scan(value interface{}) error {
	if value == nil {
		ns.Entities, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.Entities.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullEntities) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.Entities), nil
}

type EvalStatusTypes string

const (
	EvalStatusTypesSuccess EvalStatusTypes = "success"
	EvalStatusTypesFailure EvalStatusTypes = "failure"
	EvalStatusTypesError   EvalStatusTypes = "error"
	EvalStatusTypesSkipped EvalStatusTypes = "skipped"
	EvalStatusTypesPending EvalStatusTypes = "pending"
)

func (e *EvalStatusTypes) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = EvalStatusTypes(s)
	case string:
		*e = EvalStatusTypes(s)
	default:
		return fmt.Errorf("unsupported scan type for EvalStatusTypes: %T", src)
	}
	return nil
}

type NullEvalStatusTypes struct {
	EvalStatusTypes EvalStatusTypes `json:"eval_status_types"`
	Valid           bool            `json:"valid"` // Valid is true if EvalStatusTypes is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullEvalStatusTypes) Scan(value interface{}) error {
	if value == nil {
		ns.EvalStatusTypes, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.EvalStatusTypes.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullEvalStatusTypes) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.EvalStatusTypes), nil
}

type Artifact struct {
	ID                 int32     `json:"id"`
	RepositoryID       int32     `json:"repository_id"`
	ArtifactName       string    `json:"artifact_name"`
	ArtifactType       string    `json:"artifact_type"`
	ArtifactVisibility string    `json:"artifact_visibility"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}

type ArtifactVersion struct {
	ID                    int32                 `json:"id"`
	ArtifactID            int32                 `json:"artifact_id"`
	Version               int64                 `json:"version"`
	Tags                  sql.NullString        `json:"tags"`
	Sha                   string                `json:"sha"`
	SignatureVerification pqtype.NullRawMessage `json:"signature_verification"`
	GithubWorkflow        pqtype.NullRawMessage `json:"github_workflow"`
	CreatedAt             time.Time             `json:"created_at"`
}

type EntityPolicy struct {
	ID              int32           `json:"id"`
	Entity          Entities        `json:"entity"`
	PolicyID        int32           `json:"policy_id"`
	ContextualRules json.RawMessage `json:"contextual_rules"`
	CreatedAt       time.Time       `json:"created_at"`
	UpdatedAt       time.Time       `json:"updated_at"`
}

type Group struct {
	ID             int32          `json:"id"`
	OrganizationID int32          `json:"organization_id"`
	Name           string         `json:"name"`
	Description    sql.NullString `json:"description"`
	IsProtected    bool           `json:"is_protected"`
	CreatedAt      time.Time      `json:"created_at"`
	UpdatedAt      time.Time      `json:"updated_at"`
}

type Organization struct {
	ID        int32     `json:"id"`
	Name      string    `json:"name"`
	Company   string    `json:"company"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Policy struct {
	ID        int32     `json:"id"`
	Name      string    `json:"name"`
	Provider  string    `json:"provider"`
	GroupID   int32     `json:"group_id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type PolicyStatus struct {
	ID           int32           `json:"id"`
	PolicyID     int32           `json:"policy_id"`
	PolicyStatus EvalStatusTypes `json:"policy_status"`
	LastUpdated  time.Time       `json:"last_updated"`
}

type Project struct {
	ID        uuid.UUID       `json:"id"`
	Name      string          `json:"name"`
	Metadata  json.RawMessage `json:"metadata"`
	ParentID  uuid.NullUUID   `json:"parent_id"`
	CreatedAt time.Time       `json:"created_at"`
	UpdatedAt time.Time       `json:"updated_at"`
}

type ProviderAccessToken struct {
	ID             int32          `json:"id"`
	Provider       string         `json:"provider"`
	GroupID        int32          `json:"group_id"`
	OwnerFilter    sql.NullString `json:"owner_filter"`
	EncryptedToken string         `json:"encrypted_token"`
	ExpirationTime time.Time      `json:"expiration_time"`
	CreatedAt      time.Time      `json:"created_at"`
	UpdatedAt      time.Time      `json:"updated_at"`
}

type Repository struct {
	ID         int32         `json:"id"`
	Provider   string        `json:"provider"`
	GroupID    int32         `json:"group_id"`
	RepoOwner  string        `json:"repo_owner"`
	RepoName   string        `json:"repo_name"`
	RepoID     int32         `json:"repo_id"`
	IsPrivate  bool          `json:"is_private"`
	IsFork     bool          `json:"is_fork"`
	WebhookID  sql.NullInt32 `json:"webhook_id"`
	WebhookUrl string        `json:"webhook_url"`
	DeployUrl  string        `json:"deploy_url"`
	CreatedAt  time.Time     `json:"created_at"`
	UpdatedAt  time.Time     `json:"updated_at"`
}

type Role struct {
	ID             int32         `json:"id"`
	OrganizationID int32         `json:"organization_id"`
	GroupID        sql.NullInt32 `json:"group_id"`
	Name           string        `json:"name"`
	IsAdmin        bool          `json:"is_admin"`
	IsProtected    bool          `json:"is_protected"`
	CreatedAt      time.Time     `json:"created_at"`
	UpdatedAt      time.Time     `json:"updated_at"`
}

type RuleEvaluationStatus struct {
	ID           int32           `json:"id"`
	Entity       Entities        `json:"entity"`
	PolicyID     int32           `json:"policy_id"`
	RuleTypeID   int32           `json:"rule_type_id"`
	EvalStatus   EvalStatusTypes `json:"eval_status"`
	RepositoryID sql.NullInt32   `json:"repository_id"`
	ArtifactID   sql.NullInt32   `json:"artifact_id"`
	Details      string          `json:"details"`
	LastUpdated  time.Time       `json:"last_updated"`
}

type RuleType struct {
	ID          int32           `json:"id"`
	Name        string          `json:"name"`
	Provider    string          `json:"provider"`
	GroupID     int32           `json:"group_id"`
	Description string          `json:"description"`
	Guidance    string          `json:"guidance"`
	Definition  json.RawMessage `json:"definition"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdatedAt   time.Time       `json:"updated_at"`
}

type SessionStore struct {
	ID           int32          `json:"id"`
	Provider     string         `json:"provider"`
	GrpID        sql.NullInt32  `json:"grp_id"`
	Port         sql.NullInt32  `json:"port"`
	OwnerFilter  sql.NullString `json:"owner_filter"`
	SessionState string         `json:"session_state"`
	CreatedAt    time.Time      `json:"created_at"`
}

type SigningKey struct {
	ID            int32     `json:"id"`
	GroupID       int32     `json:"group_id"`
	PrivateKey    string    `json:"private_key"`
	PublicKey     string    `json:"public_key"`
	Passphrase    string    `json:"passphrase"`
	KeyIdentifier string    `json:"key_identifier"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

type User struct {
	ID                  int32          `json:"id"`
	OrganizationID      int32          `json:"organization_id"`
	Email               sql.NullString `json:"email"`
	Username            string         `json:"username"`
	Password            string         `json:"password"`
	NeedsPasswordChange bool           `json:"needs_password_change"`
	FirstName           sql.NullString `json:"first_name"`
	LastName            sql.NullString `json:"last_name"`
	IsProtected         bool           `json:"is_protected"`
	CreatedAt           time.Time      `json:"created_at"`
	UpdatedAt           time.Time      `json:"updated_at"`
	MinTokenIssuedTime  sql.NullTime   `json:"min_token_issued_time"`
}

type UserGroup struct {
	ID      int32 `json:"id"`
	UserID  int32 `json:"user_id"`
	GroupID int32 `json:"group_id"`
}

type UserRole struct {
	ID     int32 `json:"id"`
	UserID int32 `json:"user_id"`
	RoleID int32 `json:"role_id"`
}
